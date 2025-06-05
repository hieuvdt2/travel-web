import { apiClient } from "../api-client";

export interface ContactPayload {
  name: string;
  email: string;
  message: string;
  subject:string;
  question:string;
  phone:string;
}

export interface ContactResponse {
  id: number;
  attributes: ContactPayload & {
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };
}

/**
 * Gửi form liên hệ lên Strapi
 */
async function submitContact(payload: ContactPayload): Promise<ContactResponse> {
  const response = await apiClient.post<{ data: ContactResponse }>("/contacts", {
    data: payload,
  });

  return response.data; 
}

export const contactService = {
    submitContact

    // ...
  }