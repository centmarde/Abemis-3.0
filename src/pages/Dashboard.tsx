import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '@/stores/authStore';

export default function Dashboard() {
  const navigate = useNavigate();
  const { userData, handleLogout } = useAuthStore();

  const onLogout = () => {
    handleLogout(navigate);
  };

  return (
    <div className="p-8 bg-gray-100 min-h-full">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold mb-6 text-gray-800">Dashboard</h1>
          
          <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded">
            <p className="text-green-800 font-semibold">
              ✓ Welcome! You are successfully authenticated.
            </p>
          </div>
          
          <div className="space-y-4 mb-8">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Your Session Information:</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-gray-50 rounded border">
                <p className="text-sm text-gray-600 mb-1">Email</p>
                <p className="font-mono text-sm">{userData.email}</p>
              </div>
              
              <div className="p-4 bg-gray-50 rounded border">
                <p className="text-sm text-gray-600 mb-1">Role</p>
                <p className="font-mono text-sm capitalize">{userData.role}</p>
              </div>
              
              <div className="p-4 bg-gray-50 rounded border">
                <p className="text-sm text-gray-600 mb-1">User ID</p>
                <p className="font-mono text-sm">{userData.userId}</p>
              </div>
              
              <div className="p-4 bg-gray-50 rounded border">
                <p className="text-sm text-gray-600 mb-1">Auth Token</p>
                <p className="font-mono text-xs truncate">{userData.token}</p>
              </div>
            </div>
          </div>

          <div className="border-t pt-6">
            <p className="text-gray-600 mb-4">
              This is a protected route. Only authenticated users can access this page.
            </p>
            <button
              onClick={onLogout}
              className="px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors font-medium"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
