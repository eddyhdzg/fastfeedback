import admin from 'firebase-admin';

// const privateKey =
//   '-----BEGIN PRIVATE KEY-----\nMIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQDcJyiYS1JIcICx\nFfJGK2qLQhsiBcpmQcpxdEZLstZkC6FcBh1uwwwsJORekDXOoIYWLduE4oJaW7Ps\nozMF7dqXXCHUcxj5WIUK7gY3cNzOj0zxGlctYMr665Sar5DBQnlpk3o5E6b1RDG7\nkc3/Nu3RrVuTeoe0Db6vNG96WMdi6chjk+z29jP5YOuviCfiJYNXS/MT/z5wGvYL\nA9LSFaDIL2xHUpFoXF9VRkd3cgymIKJuG14G5aK8DvgR2I1HMjRVgPhTFZysUxHV\n8OxgS7c+QyaExQVm+V3XLgMaxI0acLR4S8DATXHWT7hOGxtTiBHCcUFHAhUhNUSL\nTiyzLrlRAgMBAAECggEAFkZIgVMyo7VtUe2HZjHfnXAudFxrYHoE4IKMF73kGvqB\nxKCyQuoNbdx8NjSnWw0LEAyq/qiX2YpYe6d+ArowgRq/agJMuzLJgEP5wUuELcqa\nNXVNr3/Q/b8O+bEsh19BT00ugz6hqIRyNzkPA4TkXlAI2VS/DPjMi6fVpSZ9IvzW\nCbvav9RHkUeGrfbagMxV7FcK0vO1ZUyvxrKOBHHxSZJ2uAh3OY8MRrhDardc5tdt\nzT93gaRdlqteySQVp5sXB/ffZR5brspBMS/+/Hm/MeaEvP6teN7fm6ty+12ybAe2\nXwQ7sHDcNZePYXEJvyj4hCBEyFIHeFonh7UMA/d1OQKBgQD8ijOzj3n6FWO+gs6w\nwtIaxvbeLMur9u8zOs8UXPFThKlgsO1N8PPJVhZnq+LVKg+cr446GXTVhbecPNyB\nqZeDt6IxkOgqHb+HHNeh6ctMw33UtPQ1C++/1fyvhJs9Z0VGjEFcVpMnT3PSG/eV\nQDdJSotKt6pdvlWxLzg1linX6QKBgQDfK1uVFafxdggm9FjQMq3aF2MB+eQUsgHf\nvokGZvl3vGwYQqxjMiL1kYWCbxRTQm6wE99oTnJDvXVpUKw7k+x25/2A3/aB4hTa\nUamjAoB8j7d1g2pGNRBJlVdPahqDfNMg8xjMnfEvUzJmXL66M7y91Aw1CF/Cc6hq\nSq94Bv/dKQKBgQCObduO7+KZeyrQLbIo2xfoZkKhN55/FDwAJrDYCTtKIU3t7JtK\nFBVKfjUQr061bo1zj0el2Omd61aM1X5/2ohLj2v4jIOEDVcR+uBavyMb3j2/k3cP\n2/WRujxTOXTcgrv9d+j9DQ7dYuAtpfxSvu7vdQ1uTHvXdxuZXMpU3qYm0QKBgQDA\n4FcxnVrdvFZFXI9ZuUM6J1ZBgfjWzhYCi0kgCGV5T5bYzN7yiIVgWZna5ifZ4aOK\neFJwcsQcuaS9FaUVhL4s8knNVUNWc8/z8/o50VK81PUJEkAKV5gxEGo6T4iEtaA/\nbPq09Zhaf3wireuFQGvSYG8AcrFYfN9EpjHK+bmvKQKBgQDGwGZfXvnj8z67whTf\n1zh1nJH3SPng0Q+TsrV4aK9bxVhNxWWRZsFMwo3SE8FcDqriOKzl4CMb5iJQ65/m\nJksABbcBIkPgDrsEunaNFPfEYyaVyn5znkFi0143mp6VuEUFXGBwqLF4OyeeNDH9\nZV2i9cu9qLuu/A5lW4pqgSeFmw==\n-----END PRIVATE KEY-----\n';

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert({
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
      // privateKey,
      projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID
    }),
    databaseURL: 'https://fastfeedback-b71d2-default-rtdb.firebaseio.com'
  });
}

export default admin.firestore();
