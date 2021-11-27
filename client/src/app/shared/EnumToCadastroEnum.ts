export type CadastroEnumType<T> = {
    tipos: T;
    chaves: any[];
}

export class EnumToCadastroEnum {
    converter<T>(tempTipo: T): CadastroEnumType<T> {
        const chaves = Object.keys(tempTipo).filter(t => !isNaN(Number(t)));

        return {
            chaves: chaves,
            tipos: tempTipo
        };
    }
}