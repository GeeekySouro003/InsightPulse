export const Rings = () => {
    return (
        <div className="absolute top-1/2 left-1/2 w-[51.375rem] aspect-square border border-black rounded-full -translate-x-1/2 -translate-y-1/2">
            <div className="absolute top-1/2 left-1/2 w-[36.125rem] aspect-square border border-black rounded-full -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute top-1/2 left-1/2 w-[23.125rem] aspect-square border border-black rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        </div>
    );
};

export const SideLines = () => {
    return (
        <>
        <div className="absolute top-0 left-5 w-0.5 h-full bg-stroke"></div>
        <div className="absolute top-0 right-5 w-0.5 h-full bg-stroke"></div>
        </>
    );
};

export const BackgroundCircles = () => {
    return (
        <>
        <div className="absolute top-[4.4rem] left-16 w-3 h-3 bg-gradient-to-b from-[#0CE5D3] to-[#1A1A32] rounded-full"></div>
        <div className="absolute top-[12.6rem] right-16 w-3 h-3 bg-gradient-to-b from-[#FF3C00] to-[#1A1A32] rounded-full"></div>
        <div className="absolute top-[26.8rem] left-12 w-6 h-6 bg-gradient-to-b from-[#FF8A7D] to-[#1A1A32] rounded-full"></div>
        </>
    );
};

export const HamburgerMenu = () => {
    return (
        <div className="absolute inset-0 pointer-events-none lg:hidden">
            <Rings />
            <SideLines />
            <BackgroundCircles />
        </div>
    );
};