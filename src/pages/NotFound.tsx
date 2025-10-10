import { useNavigate, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const NotFound = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-md w-full px-6 py-8 bg-white rounded-lg shadow-xl text-center">
        <div className="mb-6">
          <div className="text-8xl font-bold text-blue-500 mb-4">404</div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Page Not Found
          </h1>
          <p className="text-gray-600 mb-6">
            Oops! The page you're looking for doesn't exist or has been moved.
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

        <p className="mt-6 text-sm text-gray-500">
          Current path: <span className="font-mono text-blue-600">{location.pathname}</span>
        </p>
      </div>
    </div>
  );
};

export default NotFound;
