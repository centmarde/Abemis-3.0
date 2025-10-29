import { useNavigate, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Forbidden = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 to-orange-50">
      <div className="max-w-md w-full px-6 py-8 bg-white rounded-lg shadow-xl text-center">
        <div className="mb-6">
          <div className="text-8xl font-bold text-red-500 mb-4">403</div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Access Forbidden
          </h1>
          <p className="text-gray-600 mb-6">
            Sorry, you don't have permission to access this page.
          </p>
        </div>

        <div className="space-y-3">
          <Button
            onClick={() => navigate(-1)}
            variant="outline"
            className="w-full"
          >
            Go Back
          </Button>
          <Button
            onClick={() => navigate('/')}
            className="w-full"
          >
            Go to Home
          </Button>
        </div>

        {from !== '/' && (
          <p className="mt-6 text-sm text-gray-500">
            You tried to access: <span className="font-mono text-red-600">{from}</span>
          </p>
        )}
      </div>
    </div>
  );
};

export default Forbidden;
