import Link from 'next/link';
import Image from 'next/image';
import Seo from "./Seo";

import { AllCategories } from '../interfaces'
import { GetStaticProps } from 'next';
import api from '../service/api';

export default function HeaderComponent() {
    return (
        <header>
            <div>

                <Image
                    src="/img/riot.jpg"
                    width={200}
                    height={105}
                />

                <main>
                    <div>
                        {/* { categories.map((category, index) => {
                            <Link key={index} href={`/cursos/${category.id}`}>
                                <a>{category.title}</a>
                            </Link>

                        })} */}

                    </div>
                </main>
            </div>
        </header>
    )
}

export const getStaticProps: GetStaticProps<AllCategories> = async (context) => {
    const response = await api.get('categories')
    const categories = response.data;

    return {
        props: {
            categories,
        },
        revalidate: 60
    }
}