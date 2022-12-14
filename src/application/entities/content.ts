// criando um tipo que podemos fazer validações
// e muitas outras coisas sem sujar a classe principal
export class Content {
  private readonly content: string;

  get value(): string {
    return this.content;
  }

  private validateContentLength(content: string): boolean {
    return content.length >= 5 && content.length <= 240;
  }

  constructor(content: string) {
    const isContentLength = this.validateContentLength(content);

    if (!isContentLength) {
      throw new Error('Content length error');
    }

    this.content = content;
  }
}
