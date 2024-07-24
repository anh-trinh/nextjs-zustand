type HeaderProps = {
    logoUrl: string;
};

const Header = ({ logoUrl }: HeaderProps) => {
    return <div>{logoUrl}</div>
}

export default Header;
