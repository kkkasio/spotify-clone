import React from 'react';

import { Container, NewPlaylist, Nav } from './styles';

import AddPlaylistIcon from '../../assets/images/add_playlist.svg';

export default function Sidebar() {
  return (
    <Container>
      <div>
        <Nav main>
          <li>
            <a href="#">Navegar</a>
          </li>
          <li>
            <a href="#">Rádio</a>
          </li>
          <li />
        </Nav>

        <Nav>
          <li>
            <span>Sua Biblioteca</span>
          </li>
          <li>
            <a href="#">Seu Daly Mix</a>
          </li>
          <li>
            <a href="#">Tocados Recentemente</a>
          </li>

          <li>
            <a href="#">Músicas</a>
          </li>

          <li>
            <a href="#">Albuns</a>
          </li>

          <li>
            <a href="#">Estações</a>
          </li>
        </Nav>
      </div>

      <NewPlaylist>
        <img src={AddPlaylistIcon} alt="Adicionar Playlist" />
        Criar Playlist
      </NewPlaylist>
    </Container>
  );
}
