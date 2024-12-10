import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, User, X } from 'lucide-react';
import { useAuthStore } from '../store/useAuthStore';
import { useSearchStore } from '../store/useSearchStore';

export const Header: React.FC = () => {
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const { user } = useAuthStore();
  const { searchQuery, setSearchQuery, searchResults } = useSearchStore();
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setIsSearchFocused(false);
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <header className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="font-bold text-xl">
            优品商城
          </Link>

          <div className="flex-1 max-w-lg mx-8 relative">
            <form onSubmit={handleSearch}>
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => setIsSearchFocused(true)}
                  placeholder="搜索商品..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-black"
                />
                {searchQuery ? (
                  <X
                    className="absolute right-3 top-2.5 h-5 w-5 text-gray-400 cursor-pointer"
                    onClick={() => setSearchQuery('')}
                  />
                ) : (
                  <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
                )}
              </div>
            </form>

            {isSearchFocused && searchQuery && searchResults.length > 0 && (
              <div className="absolute top-full left-0 right-0 bg-white border border-gray-200 rounded-md shadow-lg mt-1 z-50">
                {searchResults.map((result) => (
                  <Link
                    key={result.id}
                    to={`/product/${result.id}`}
                    className="block px-4 py-2 hover:bg-gray-50"
                    onClick={() => setIsSearchFocused(false)}
                  >
                    <div className="flex items-center">
                      <img
                        src={result.image}
                        alt={result.name}
                        className="w-10 h-10 object-cover rounded"
                      />
                      <div className="ml-3">
                        <div className="text-sm font-medium">{result.name}</div>
                        <div className="text-sm text-gray-500">
                          ¥{result.price.toFixed(2)}
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
                <Link
                  to={`/search?q=${encodeURIComponent(searchQuery)}`}
                  className="block px-4 py-2 text-center text-sm text-gray-600 hover:bg-gray-50 border-t"
                  onClick={() => setIsSearchFocused(false)}
                >
                  查看全部结果
                </Link>
              </div>
            )}
          </div>

          <div className="flex items-center space-x-4">
            <Link to={user ? "/user/profile" : "/login"} className="flex items-center space-x-2">
              <User className="h-6 w-6" />
              {user ? (
                <span className="text-sm">{user.email}</span>
              ) : (
                <span className="text-sm">登录/注册</span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};