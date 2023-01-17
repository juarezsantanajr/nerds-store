export interface IProduto {
    id: number;
    descricao: string;
    preco: number;
    descricaoPreco: string;
    quantidadeEstoque: number;
    imagem: string;
}

export interface IProdutoCarrinho extends IProduto{
  quantidade: number;
}

export const produtos: IProduto[] = [
    { id: 1, descricao: "Controle Xbox", preco: 439.00, descricaoPreco: "À vista no PIX", imagem: "/assets/CONTROLE-XBOX-SERIES-3.png", quantidadeEstoque:15 },
    { id: 2, descricao: "Controle Playstation", preco: 539.50, descricaoPreco: "À vista no PIX", imagem: "/assets/DUALSENSE-BLUE.png", quantidadeEstoque:15 },
    { id: 3, descricao: "God of war PS4", preco: 349.99, descricaoPreco: "À vista no PIX", imagem: "/assets/JOGO-PLAYSTATION4-1.png", quantidadeEstoque:20 },
    { id: 4, descricao: "FIFA 23 PS4", preco: 399.99, descricaoPreco: "À vista no PIX", imagem: "/assets/JOGO-PLAYSTATION4-2.png", quantidadeEstoque:10 },
    { id: 5, descricao: "Uncharted PS5", preco: 499.99, descricaoPreco: "À vista no PIX", imagem: "/assets/JOGO-PLAYSTATION5-2.png", quantidadeEstoque:30 },
    { id: 6, descricao: "Guilty Gear PS5", preco: 399.99, descricaoPreco: "À vista no PIX", imagem: "/assets/JOGO-PLAYSTATION5-3.png", quantidadeEstoque:10 },
    { id: 7, descricao: "Grid Legends PS5", preco: 499.99, descricaoPreco: "À vista no PIX", imagem: "/assets/JOGO-PLAYSTATION5-4.png", quantidadeEstoque:100 },
    { id: 8, descricao: "Xbox Series X", preco: 4449.99, descricaoPreco: "À vista no PIX", imagem: "/assets/XBOX-SERIESX.png", quantidadeEstoque:15 },
    { id: 9, descricao: "Playstation 5", preco: 5449.99, descricaoPreco: "À vista no PIX", imagem: "/assets/PLAYSTATION5.png", quantidadeEstoque:10 },
    { id: 10, descricao: "Project Cars Xbox one", preco: 349.99, descricaoPreco: "À vista no PIX", imagem: "/assets/JOGO-XBOX-ONE-1.png", quantidadeEstoque:40 },
    { id: 11, descricao: "Devil Way Cry5 xbox one", preco: 459.99, descricaoPreco: "À vista no PIX", imagem: "/assets/JOGO-XBOX-ONE-2.png", quantidadeEstoque:20 },
    { id: 12, descricao: "Joi Con verde Nintendo Switch", preco: 520.99, descricaoPreco: "À vista no PIX", imagem: "/assets/JOI-CON-NINTENDO-SWITCH-2.png", quantidadeEstoque:50 },
    { id: 13, descricao: "One Piece Xbox one", preco: 399.99, descricaoPreco: "À vista no PIX", imagem: "/assets/JOGO-XBOX-ONE-3.png", quantidadeEstoque:10 },
    { id: 14, descricao: "Dragon Ball Xenoverse 2 Xbox one", preco: 359.59, descricaoPreco: "À vista no PIX", imagem: "/assets/JOGO-XBOX-ONE-4.png", quantidadeEstoque:18 },
    { id: 15, descricao: "Joi Con grafite Nintendo Switch", preco: 559.99, descricaoPreco: "À vista no PIX", imagem: "/assets/JOI-CON-NINTENDO-SWITCH-4.png", quantidadeEstoque:35 },
    { id: 16, descricao: "Headset Gamer", preco: 259.99, descricaoPreco: "À vista no PIX", imagem: "/assets/fone-de-ouvido-2.jpg", quantidadeEstoque:40 },
]