import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

export class HttpApiBase<TListVM, TDetailVM, TCreateVM, TEditVM> {
    private httpc: HttpClient;
    private apiUrl: string;

    constructor(http: HttpClient, apiUrl: string) {
        this.httpc = http;
        this.apiUrl = apiUrl;
    }

    public obterTodos(): Observable<TListVM[]> {
        return this.httpc.get<TListVM[]>(this.apiUrl);
    }

    public obterPorId(id: number): Observable<TDetailVM> {
        return this.httpc.get<TDetailVM>(`${this.apiUrl}/${id}`);
    }

    public adicionar(entidade: TCreateVM): Observable<TCreateVM> {
        return this.httpc.post<TCreateVM>(this.apiUrl, entidade);
    }

    public editar(id: number, entidade: TEditVM): Observable<TEditVM> {
        return this.httpc.put<TEditVM>(`${this.apiUrl}/${id}`, entidade);
    }

    public excluir(id: number): Observable<any> {
        return this.httpc.delete<any>(`${this.apiUrl}/${id}`);
    }
}