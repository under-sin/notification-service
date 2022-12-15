import { Content } from './content';

describe('Content', () => {
  it('should be able to create a notification content', () => {
    const content = new Content('Você recebeu uma nova mensagem');

    expect(content).toBeTruthy();
  });

  it('should be able to create a notification content with less than 5 characters', () => {
    expect(() => new Content('aaa')).toThrow(); // espera um erro
  });

  it('should be able to create a notification content with more than 240 characters', () => {
    expect(() => new Content('aaa'.repeat(241))).toThrow(); // espera um erro
  });
});
