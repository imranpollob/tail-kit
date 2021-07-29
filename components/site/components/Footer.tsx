interface Props {
    links: FooterLink[];
}

interface FooterLink {
    label: string;
    link?: string;
}

const Footer = (props: Props) => {
    return (
        <div className="m-4">
            <div className="text-center text-gray-700 pb-2">
                Created by{' '}
                <a href="https://imranpollob.com/" className="underline hover:text-indigo-600">
                    Imran Pollob
                </a>{' '}
                © {new Date().getFullYear()}
            </div>
            <div className="flex justify-center items-center space-x-2">
                {props.links.map((item) => (
                    <a href={item.link} key={item.label} className="text-gray-700 hover:text-indigo-600">
                        {item.label}
                    </a>
                ))}
            </div>
        </div>
    );
};

export default Footer;
