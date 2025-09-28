interface NavItem {
  label: string;
  href?: string;
}

interface HeaderProps {
  leftNavItems: NavItem[];
  rightNavItems: NavItem[];
}

export default function Header({ leftNavItems, rightNavItems }: HeaderProps) {
  return (
    <header className="absolute top-[58px] left-0 right-0 z-10">
      <nav className="flex justify-between items-center">
        {/* Left Navigation */}
        <div className="flex gap-[75px] ml-[53px]">
          {leftNavItems.map((item, index) => (
            <a
              key={index}
              href={item.href || '#'}
              className="text-white text-[6.22px] font-normal font-['Gacor_Personal_Use'] hover:opacity-80 transition-opacity"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Right Navigation */}
        <div className="flex gap-[71px] mr-[53px]">
          {rightNavItems.map((item, index) => (
            <a
              key={index}
              href={item.href || '#'}
              className="text-white text-[6.22px] font-normal font-['Gacor_Personal_Use'] hover:opacity-80 transition-opacity"
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
