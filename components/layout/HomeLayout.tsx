import { FC } from 'react';
import AppHeader from '../site/header/AppHeader';
import FooterLight from '../kit/components/navigation/footer/FooterLight';
import { footerLink } from './AppLayout';
import Meta from '../site/Meta';

const HomeLayout: FC = ({ children }) => {
    return (
        <>
            <Meta
                pageTitle="Tailwind UI KIT – 250 components and templates for React, VueJS and Angular."
                description="Over 200 free and open source components and templates for tailwind css to build beautiful UI. All are fully coded and work with React, Angular and VueJS."
            />

            <div className="relative bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="relative pb-8 bg-white sm:pb-16 md:pb-20  lg:w-full lg:pb-28 xl:pb-32">
                        <AppHeader hideLinks={true} />
                        <main className="mt-10 mx-auto px-4 sm:px-6 lg:px-8">{children}</main>
                    </div>
                </div>
            </div>
            <div>
                <FooterLight links={footerLink} />
            </div>
        </>
    );
};

export default HomeLayout;
