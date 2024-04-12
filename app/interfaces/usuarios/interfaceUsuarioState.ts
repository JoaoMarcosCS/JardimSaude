export interface UsuarioState {
    [x: string]: any;
    id: number | null;
    nome: string | null;
    nivel: number | null;
    isLoading: boolean;
    error: string | null;
    email: string | null;
}