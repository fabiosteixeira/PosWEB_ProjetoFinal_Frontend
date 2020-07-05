import React from "react";

export const About = () => 
<div>
    <h1 className="aboutText">Exercício 4 e 5</h1>
    <h3 className="aboutText">Pontifícia Universidade Católica de Minas Gerais</h3>
    <h4 className="aboutText"><span className="tagText">Curso:</span> Desenvolvimento web Full Stack</h4>
    <h4 className="aboutText"><span className="tagText">Disciplina:</span> Frameworks front end: React</h4>
    <h4 className="aboutText"><span className="tagText">Professor:</span> Samuel Martins</h4>
    <h4 className="aboutText"><span className="tagText">Aluno:</span> André Guilherme de Almeida Santos (<a href="https://github.com/lordonebr" rel="noopener noreferrer" target="_blank">Github</a>)</h4>

    <style jsx>{`
        .aboutText {
            margin-left: 15px;
          }
        
        .tagText {
            text-decoration: underline;
        }
    `}</style>
</div>;

