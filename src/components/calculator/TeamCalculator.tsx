import React, { useState } from 'react';
import { Plus, X } from 'lucide-react';

interface Role {
  name: string;
  description: string;
  monthlyRate: number;
}

interface SelectedRole {
  role: Role;
  months: number;
}

const TeamCalculator: React.FC = () => {
  const [selectedRoles, setSelectedRoles] = useState<SelectedRole[]>([]);

  const roles: Role[] = [
    { 
      name: 'AI Engineer', 
      description: 'Deep learning, NLP, and generative AI specialists', 
      monthlyRate: 8000 
    },
    { 
      name: 'Machine Learning Engineer', 
      description: 'Predictive modeling, ML pipelines, and data science experts', 
      monthlyRate: 8000 
    },
    { 
      name: 'Frontend Developer', 
      description: 'React, Angular, Vue specialists', 
      monthlyRate: 7000 
    },
    { 
      name: 'Backend Developer', 
      description: 'Node.js, Python, Java experts', 
      monthlyRate: 7000 
    },
    { 
      name: 'UI/UX Designer', 
      description: 'User experience and interface designers', 
      monthlyRate: 6000 
    },
    { 
      name: 'Project Manager', 
      description: 'Agile and technical project managers', 
      monthlyRate: 6000 
    },
    { 
      name: 'QA Manual Engineer', 
      description: 'Manual testing and quality assurance specialists', 
      monthlyRate: 5000 
    },
    { 
      name: 'QA Automation Engineer', 
      description: 'Automated testing and CI/CD pipeline specialists', 
      monthlyRate: 7000 
    },
    { 
      name: 'DevOps Engineer', 
      description: 'CI/CD and infrastructure specialists', 
      monthlyRate: 8000 
    },
    { 
      name: 'Cloud Architect', 
      description: 'Cloud infrastructure and architecture experts', 
      monthlyRate: 10000 
    },
    { 
      name: 'Software Architect', 
      description: 'System design and technical architecture specialists', 
      monthlyRate: 10000 
    },
    { 
      name: 'AI Tech Lead', 
      description: 'AI/ML team leadership and technical direction', 
      monthlyRate: 12000 
    }
  ];

  const addRole = (roleName: string) => {
    const role = roles.find(r => r.name === roleName);
    if (role) {
      setSelectedRoles([...selectedRoles, { role, months: 1 }]);
    }
  };

  const removeRole = (index: number) => {
    setSelectedRoles(selectedRoles.filter((_, i) => i !== index));
  };

  const updateRoleMonths = (index: number, months: number) => {
    const updatedRoles = [...selectedRoles];
    updatedRoles[index].months = months;
    setSelectedRoles(updatedRoles);
  };

  // Calculate total cost
  const calculateTotalCost = () => {
    let totalCost = 0;
    
    selectedRoles.forEach(({ role, months }) => {
      totalCost += role.monthlyRate * months;
    });
    
    return totalCost;
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amount);
  };

  const totalCost = calculateTotalCost();

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-4">Team Calculator</h2>
        <p className="text-gray-600">
          Build your team by selecting roles and their duration. Add as many roles as you need.
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <div className="mb-8">
            <label className="block text-lg font-medium text-gray-700 mb-2">
              Add Team Member
            </label>
            <div className="flex gap-2">
              <select
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                onChange={(e) => addRole(e.target.value)}
                value=""
              >
                <option value="" disabled>Select a role</option>
                {roles.map((role) => (
                  <option key={role.name} value={role.name}>
                    {role.name} - {formatCurrency(role.monthlyRate)}/month
                  </option>
                ))}
              </select>
              <button
                onClick={() => {
                  const select = document.querySelector('select');
                  if (select && select.value) {
                    addRole(select.value);
                    select.value = '';
                  }
                }}
                className="px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors flex items-center"
              >
                <Plus size={20} />
              </button>
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-4">Selected Team Members</h3>
            {selectedRoles.length === 0 ? (
              <p className="text-gray-500 text-center py-4">No team members added yet</p>
            ) : (
              <div className="space-y-4">
                {selectedRoles.map(({ role, months }, index) => (
                  <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <p className="font-medium">{role.name}</p>
                        <p className="text-sm text-gray-500">{role.description}</p>
                        <p className="text-sm text-primary-600 font-medium mt-1">
                          {formatCurrency(role.monthlyRate)}/month
                        </p>
                        <p className="text-sm text-primary-700 font-semibold mt-1">
                          Preliminary Budget: {formatCurrency(role.monthlyRate * months)}
                        </p>
                      </div>
                      <button
                        onClick={() => removeRole(index)}
                        className="text-gray-400 hover:text-gray-600"
                      >
                        <X size={20} />
                      </button>
                    </div>
                    <div className="mt-2">
                      <label className="block text-sm text-gray-600 mb-1">
                        Duration: {months} {months === 1 ? 'month' : 'months'}
                      </label>
                      <input
                        type="range"
                        min="1"
                        max="24"
                        value={months}
                        onChange={(e) => updateRoleMonths(index, parseInt(e.target.value))}
                        className="w-full h-2 bg-gray-200 rounded-full appearance-none cursor-pointer team-calculator-slider"
                      />
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        
        <div>
          <div className="bg-primary-50 rounded-lg p-6 mb-8">
            <h3 className="text-2xl font-bold mb-2">Estimated Cost</h3>
            <div className="flex flex-col space-y-4 mb-6">
              <div>
                <p className="text-gray-600 mb-1">Total project cost</p>
                <p className="text-4xl font-bold text-dark-500">{formatCurrency(totalCost)}</p>
              </div>
            </div>
            <div className="text-sm text-gray-500">
              *Rates are estimates and may vary based on specific skills and experience levels required.
            </div>
          </div>
          
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">What's included</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 text-primary-500">
                  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="ml-3 text-gray-600">Full-time dedicated professionals</p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 text-primary-500">
                  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="ml-3 text-gray-600">Team management and oversight</p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 text-primary-500">
                  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="ml-3 text-gray-600">Agile development methodology</p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 text-primary-500">
                  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="ml-3 text-gray-600">Weekly progress reports</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamCalculator;