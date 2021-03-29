import Image from 'next/image';
import dynamic from 'next/dynamic';
import { useState } from 'react';

import Seo from '../components/Seo';
import { Container } from '../styles/pages/Home/style';
import HeaderComponent from '../components/Header';

const ModalContent = dynamic(
  () => import('../components/Modal'),
  { loading: () => <p>Carregando...</p> }
);

export default function Home() {

  const [ isShow, setIsShow ] = useState(false)

  function handleOpenModal(){
    setIsShow(!isShow)
  }

  return (
    <>
      <Seo title="Fala galera" description="Seja bem vindo e blá" />
      <HeaderComponent />
      <Container>
        <Image src="/img/riot.jpg" height={210} width={400}/>
        <h1 style={{ marginBottom: 40}}>Riot Games</h1>
        <button style={{ backgroundColor: '#f1f1f1', border: 'none', padding: 12, borderRadius: 8}} onClick={ handleOpenModal }> { isShow ? 'Desver' : 'Ver imagens fortes'} </button>

        <div>
          { isShow && <ModalContent />}
        </div>
      </Container>
    </>
  )
}
