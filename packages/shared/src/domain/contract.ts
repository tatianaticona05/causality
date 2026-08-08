export const HTTP_METHODS = ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'] as const;

export type HttpMethod = (typeof HTTP_METHODS)[number];

/** JSON-shaped description of a request or response payload. */
export type SchemaDefinition = Record<string, unknown>;

export interface Contract {
  id: string;
  name: string;
  sourceComponentId: string;
  targetComponentId: string;
  method: HttpMethod;
  path: string;
  requestSchema: SchemaDefinition | null;
  responseSchema: SchemaDefinition | null;
}
