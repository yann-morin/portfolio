import { contactRequests, type ContactRequest, type InsertContactRequest } from "@shared/schema";

export interface IStorage {
  createContactRequest(request: InsertContactRequest): Promise<ContactRequest>;
  getContactRequests(): Promise<ContactRequest[]>;
  markContactRequestAsProcessed(id: number): Promise<ContactRequest | undefined>;
}

export class MemStorage implements IStorage {
  private contactRequests: Map<number, ContactRequest>;
  private currentContactId: number;

  constructor() {
    this.contactRequests = new Map();
    this.currentContactId = 1;
  }

  async createContactRequest(insertRequest: InsertContactRequest): Promise<ContactRequest> {
    const id = this.currentContactId++;
    const request: ContactRequest = {
      ...insertRequest,
      id,
      createdAt: new Date(),
      isProcessed: false,
    };
    this.contactRequests.set(id, request);
    return request;
  }

  async getContactRequests(): Promise<ContactRequest[]> {
    return Array.from(this.contactRequests.values()).sort(
      (a, b) => b.createdAt.getTime() - a.createdAt.getTime()
    );
  }

  async markContactRequestAsProcessed(id: number): Promise<ContactRequest | undefined> {
    const request = this.contactRequests.get(id);
    if (request) {
      const updatedRequest = { ...request, isProcessed: true };
      this.contactRequests.set(id, updatedRequest);
      return updatedRequest;
    }
    return undefined;
  }
}

export const storage = new MemStorage();
