
import { Zap } from 'lucide-react';

const Logo = () => {
  return (
    <div className="flex items-center space-x-2">
      <div className="bg-gradient-to-r from-pink-500 to-blue-500 p-2 rounded-lg">
        <Zap className="h-6 w-6 text-white" />
      </div>
      <span className="text-xl font-bold">SmartSphere</span>
    </div>
  );
};

export default Logo;