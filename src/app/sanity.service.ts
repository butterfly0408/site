import { Injectable } from '@angular/core';

import { createClient } from '@sanity/client';

@Injectable({
  providedIn: 'root',
})
export class SanityService {
  private client = createClient({
    projectId: '1q6i2tbu',
    dataset: 'production',
    apiVersion: '2021-08-31'
  });

  // Additional configuration as needed

  getClient() {
    return this.client;
  }
}
