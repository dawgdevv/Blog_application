import { useState } from "react";
import { Link } from "react-router-dom";
import LoginModal from "../auth/LoginModal";
import SignupModal from "../auth/SignupModal";
import ProfileMenu from "../auth/ProfileMenu";
import { useAuth } from "../../hooks/useAuth";

const Navbar = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const { user, isAuthenticated } = useAuth();

  return (
    <nav className="w-full bg-white border-b px-4 py-2 flex justify-between items-center">
      <Link to="/" className="text-lg font-bold text-blue-600">
        BlogApp
      </Link>
      <div className="flex items-center gap-2">
        {isAuthenticated ? (
          <div className="relative">
            <button
              onClick={() => setShowProfileMenu((v) => !v)}
              className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center"
            >
              {user?.name?.charAt(0).toUpperCase() || "U"}
            </button>
            {showProfileMenu && (
              <ProfileMenu onClose={() => setShowProfileMenu(false)} />
            )}
          </div>
        ) : (
          <>
            <button
              onClick={() => setShowLoginModal(true)}
              className="text-blue-600 px-2 py-1"
            >
              Login
            </button>
            <button
              onClick={() => setShowSignupModal(true)}
              className="bg-blue-600 text-white px-3 py-1 rounded"
            >
              Sign Up
            </button>
          </>
        )}
      </div>
      {showLoginModal && (
        <LoginModal
          onClose={() => setShowLoginModal(false)}
          openSignup={() => {
            setShowLoginModal(false);
            setShowSignupModal(true);
          }}
        />
      )}
      {showSignupModal && (
        <SignupModal
          onClose={() => setShowSignupModal(false)}
          openLogin={() => {
            setShowSignupModal(false);
            setShowLoginModal(true);
          }}
        />
      )}
    </nav>
  );
};

export default Navbar;
