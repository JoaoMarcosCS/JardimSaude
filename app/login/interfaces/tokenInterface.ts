import {JwtPayload } from "jwt-decode"

export default interface UsuarioToken extends JwtPayload {
     name: string;
     id: number;
     email: string;
     nivel: number
}
