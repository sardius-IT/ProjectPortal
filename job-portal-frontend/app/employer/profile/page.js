'use client'

import CompanyProfileForm from './components/CompanyProfileForm'
import LogoUploader from './components/LogoUploader'

export default function EmployerProfilePage() {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Company Profile</h1>
      <LogoUploader />
      <CompanyProfileForm />
    </div>
  )
}

