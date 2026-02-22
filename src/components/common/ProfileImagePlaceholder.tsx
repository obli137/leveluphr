import React from 'react';
import { User } from 'lucide-react';

interface ProfileImagePlaceholderProps {
  /** Ruta a la imagen profesional. Si no se define, se muestra el placeholder. */
  src?: string;
  /** Forma: 'rounded' (rectangular con esquinas redondeadas) o 'circle' */
  shape?: 'rounded' | 'circle';
  className?: string;
}

/**
 * Espacio reservado para foto profesional en la página Quiénes somos.
 * Para usar una imagen real: pasar src con la ruta (ej. /images/mariano-obligado.jpg).
 */
const ProfileImagePlaceholder: React.FC<ProfileImagePlaceholderProps> = ({
  src,
  shape = 'rounded',
  className = '',
}) => {
  const shapeClass = shape === 'circle' ? 'rounded-full aspect-square' : 'rounded-2xl aspect-[3/4]';

  if (src) {
    return (
      <div className={`overflow-hidden bg-gray-100 ${shapeClass} ${className}`}>
        <img
          src={src}
          alt="Mariano Obligado"
          className="w-full h-full object-cover"
        />
      </div>
    );
  }

  return (
    <div
      className={`flex items-center justify-center bg-gray-200 text-gray-400 ${shapeClass} ${className}`}
      aria-hidden
    >
      <User size={64} strokeWidth={1} />
    </div>
  );
};

export default ProfileImagePlaceholder;
