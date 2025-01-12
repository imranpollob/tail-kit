import Meta from '../site/Meta';
import AppHeader from '../site/header/AppHeader';
import Footer from '../site/components/Footer';

export const footerLink = [
    {
        label: 'LinkedIn',
        link: 'https://www.linkedin.com/in/pollmix/',
    },
    {
        label: 'Github',
        link: 'https://github.com/pollmix/',
    },
    {
        label: 'Facebook',
        link: 'https://www.facebook.com/pollmix/',
    },
];

export const menuEntry = [
    {
        label: 'Elements',
        link: '/#elements',
        items: [
            { name: 'Buttons', link: '/components/buttons' },
            { name: 'Badges', link: '/components/badges' },
            { name: 'Avatars', link: '/components/avatar' },
            { name: 'Dropdowns', link: '/components/ddm' },
            { name: 'Alerts', link: '/components/alert' },
            { name: 'Dashboards', link: '/components/data' },
            { name: 'Progress Bars', link: '/components/progress' },
        ],
    },
    {
        label: 'Forms',
        link: '/#forms',
        items: [
            { name: 'Inputs', link: '/components/inputtext' },
            { name: 'Selects', link: '/components/inputselect' },
            { name: 'Toggle', link: '/components/toggle' },
            { name: 'Layouts', link: '/components/form' },
        ],
    },
    {
        label: 'Commerce',
        link: '/#commerce',
        items: [
            { name: 'Pricing Cards', link: '/components/pricing' },
            { name: 'Shopping Cards', link: '/components/shopping' },
        ],
    },
    {
        label: 'Navigation',
        link: '/#navigation',
        items: [
            { name: 'Headers', link: '/components/header' },
            { name: 'Footers', link: '/components/footer' },
            { name: 'Sidebars', link: '/components/sidebar' },
        ],
    },
    {
        label: 'Sections',
        link: '/#pagesection',
        items: [
            { name: 'Call to Actions', link: '/components/cta' },
            { name: 'Testimonials', link: '/components/testimonial' },
            { name: 'Profiles', link: '/components/profile' },
            { name: 'Teams', link: '/components/team' },
            { name: 'FAQs', link: '/components/faq' },
            { name: 'Features', link: '/components/feature' },
            { name: 'Blogs', link: '/components/blog' },
        ],
    },
    {
        label: 'List',
        link: '/#list',
        items: [
            { name: 'Tables', link: '/components/table' },
            { name: 'Lists', link: '/components/list' },
        ],
    },
];

export const menuTemplates = [
    {
        label: 'Dashboard',
        link: '/#dashboard',
        items: [
            { name: 'Projects', link: '/templates/dashboard' },
            { name: 'Datas', link: '/templates/datadashboard' },
        ],
    },
    {
        label: 'Landing page',
        link: '/#home',
        items: [
            { name: 'Products', link: '/templates/simpleHome' },
            { name: 'Get Started', link: '/templates/getStarted' },
            { name: 'Portfolios', link: '/templates/folio' },
        ],
    },
    {
        label: 'Errors page',
        link: '/#errors',
        items: [{ name: '404 Not Found', link: '/templates/errors404' }],
    },
];

interface Props {
    title: string;
    desc: string;
    children: React.ReactNode;
}

const AppLayout = ({ title, desc, children }: Props) => {
    return (
        <>
            <Meta pageTitle={title} description={desc} />

            <div className="relative bg-white ">
                <div className="max-w-7xl mx-auto">
                    <div className="relative pb-14 bg-white sm:pb-16 md:pb-20 lg:w-full lg:pb-28 xl:pb-32">
                        <AppHeader />
                        <main className="mx-auto max-w-7xl px-4 mt-8 sm:px-6  lg:px-8 h-full">{children}</main>
                    </div>
                </div>
                <Footer links={footerLink} />
            </div>
        </>
    );
};

export default AppLayout;
