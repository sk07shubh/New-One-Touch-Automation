import { ChevronLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface PageHeaderProps {
  title: string;
  showBack?: boolean;
}

const PageHeader = ({ title, showBack = true }: PageHeaderProps) => {
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 bg-primary text-primary-foreground z-40">
      <div className="flex items-center gap-3 px-4 py-4">
        {showBack && (
          <button
            onClick={() => navigate(-1)}
            className="w-8 h-8 flex items-center justify-center hover:bg-primary-foreground/10 rounded-full transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
        )}
        <h1 className="text-lg font-semibold flex-1 text-center pr-8">{title}</h1>
      </div>
    </header>
  );
};

export default PageHeader;
