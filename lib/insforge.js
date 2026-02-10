import { createClient } from '@insforge/sdk';

const apiUrl = 'https://zfdb344f.us-west.insforge.app';
const anonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3OC0xMjM0LTU2NzgtOTBhYi1jZGVmMTIzNDU2NzgiLCJlbWFpbCI6ImFub25AaW5zZm9yZ2UuY29tIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzA3NDMzMDR9.wQEX3yaqo0kvlBfdHvm7V0WYGsiKZtWfMfG-HiwzYGE';

export const insforge = createClient({
    baseUrl: apiUrl,
    anonKey: anonKey
});
