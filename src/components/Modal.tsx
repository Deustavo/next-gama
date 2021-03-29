import Image from 'next/image';

export default function Modal(){
    return(
        <div style={{ margin: '40px 0 80px 0' }}>
            <p style={{ margin: 40}}>ENFRENTE O VENTO</p>
            <Image src="/img/yasuo.png" height={278} width={225}/>
        </div>
    )
}