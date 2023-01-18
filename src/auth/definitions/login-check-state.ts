export type LoginCheckState = 'valid' | 'invalid';

export type LoginCheckResponse = {
    state: LoginCheckState;
    newToken?: string
}