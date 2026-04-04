import React, { useState } from 'react';
import {
  User,
  Settings,
  Calendar,
  ShoppingBag,
  Home,
  LogOut,
  Bell,
  Search,
  TrendingUp,
  Activity,
  Clock,
  ChevronRight,
  ShieldCheck
} from 'lucide-react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const Dashboard = ({ setIsAuthenticated }) => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('Overview');
  const userEmail = localStorage.getItem("healthcare_user_email") || "user@example.com";
  const userName = userEmail.split('@')[0];


  const [totalAppointments, setTotalAppointments] = useState(0);
  const [upcomingTests, setUpcomingTests] = useState(0);
  const [prescriptions, setPrescriptions] = useState(0);
  const [reward, setReward] = useState(0);
  const [newAppointment, setNewAppointment] = useState(0);
  const [appointments, setAppointments] = useState([]);



  const handleLogout = async () => {
    try {
      const res = await fetch("http://localhost:8000/logout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user_id: localStorage.getItem("healthcare_user_id"),
        }),
      });

      const data = await res.json();
      console.log("logout:", data)
      localStorage.removeItem("healthcare_user_id");
      localStorage.removeItem("healthcare_user_email");
      alert("your are logout sucessfully")
      if (setIsAuthenticated) {
        setIsAuthenticated(false);
        navigate("/Login");
      } else {
        window.location.href = "/Login";
      }
    } catch (err) {
      console.error(err);
    }
  };

  const fetchDashboardData = async () => {
    const userId = localStorage.getItem("healthcare_user_id");
    if (!userId) return;
    try {
      const res = await fetch(`http://localhost:8000/dashboard_data/${userId}`);
      if (res.ok) {
        const data = await res.json();
        setTotalAppointments(data.stats.total_appointments || 0);
        setUpcomingTests(data.stats.upcoming_tests || 0);
        setPrescriptions(data.stats.prescriptions || 0);
        setReward(data.stats.reward_points || 0);
        setNewAppointment(data.stats.new_appointments || 0);
        setAppointments(data.appointments || []);
      }
    } catch (err) {
      console.error("Error fetching dashboard data:", err);
    }
  };

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const handlenewappointment = async () => {
    try {
      const res = await fetch("http://localhost:8000/new_appointment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user_id: localStorage.getItem("healthcare_user_id"),
        }),
      });

      const data = await res.json();
      console.log("new_appointment:", data)
      setNewAppointment(data.new_appointment);
      alert("Success! Your new appointment request has been recorded.");
    } catch (err) {
      console.error(err);
    }
  };

  const statCards = [
    { title: 'Total Appointments', value: totalAppointments, icon: Calendar, color: 'text-blue-600', bg: 'bg-blue-100' },
    { title: 'Upcoming Tests', value: upcomingTests, icon: Activity, color: 'text-emerald-600', bg: 'bg-emerald-100' },
    { title: 'Prescriptions', value: prescriptions, icon: ShieldCheck, color: 'text-purple-600', bg: 'bg-purple-100' },
    { title: 'Reward Points', value: reward, icon: TrendingUp, color: 'text-amber-600', bg: 'bg-amber-100' },
  ];



  const SidebarItem = ({ icon: Icon, label }) => (
    <button
      onClick={() => setActiveTab(label)}
      className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ${activeTab === label
        ? 'bg-[#37CBD1] text-white shadow-lg shadow-[#37CBD1]/30'
        : 'text-gray-500 hover:bg-gray-100 hover:text-[#37CBD1]'
        }`}
    >
      <Icon size={20} />
      <span className="font-semibold text-sm">{label}</span>
    </button>
  );

  return (
    <div className="flex min-h-screen bg-[#F8FAFC]">
      {/* Sidebar - Desktop */}
      <aside className="hidden lg:flex flex-col w-64 bg-white border-r border-gray-100 p-6 sticky top-20 h-[calc(100vh-80px)]">
        <div className="flex flex-col gap-2 grow">
          <SidebarItem icon={Home} label="Overview" />
          <SidebarItem icon={Calendar} label="Appointments" />
          <SidebarItem icon={ShoppingBag} label="My Orders" />
          <SidebarItem icon={User} label="Profile" />
          <SidebarItem icon={Settings} label="Settings" />
        </div>

        <button
          onClick={handleLogout}
          className="flex items-center gap-3 px-4 py-3 text-red-500 hover:bg-red-50 rounded-xl transition-all font-semibold text-sm mt-auto"
        >
          <LogOut size={20} />
          Logout
        </button>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 p-4 md:p-8">
        {/* Header Section */}
        <header className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <motion.h1
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl md:text-3xl font-bold text-[#1A2547]"
            >
              Good Morning, <span className="text-[#37CBD1] capitalize">{userName}</span>!
            </motion.h1>
            <p className="text-gray-500 mt-1">Here is what's happening with your health today.</p>
          </div>

          <div className="flex items-center gap-3">
            <div className="relative flex-1 md:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="text"
                placeholder="Search..."
                className="w-full pl-10 pr-4 py-2 bg-white border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#37CBD1]/20 transition-all shadow-sm"
              />
            </div>
            <button className="p-2 bg-white border border-gray-100 rounded-xl text-gray-500 hover:text-[#37CBD1] transition-all relative">
              <Bell size={20} />
              <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
            </button>
          </div>
        </header>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {statCards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all group"
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`${card.bg} ${card.color} p-3 rounded-xl group-hover:scale-110 transition-transform`}>
                  <card.icon size={24} />
                </div>
                <span className="text-xs font-bold text-emerald-500 bg-emerald-50 px-2 py-1 rounded-lg">+12%</span>
              </div>
              <h3 className="text-gray-500 text-sm font-medium">{card.title}</h3>
              <p className="text-2xl font-bold text-[#1A2547] mt-1">{card.value}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Appointments */}
          <div className="lg:col-span-2 bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
            <div className="flex items-center justify-between p-6 border-b border-gray-50">
              <h2 className="text-lg font-bold text-[#1A2547]">Recent Appointments</h2>
              <button className="text-[#37CBD1] text-sm font-semibold hover:underline flex items-center gap-1">
                View All <ChevronRight size={16} />
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-gray-50 text-gray-500 text-xs uppercase">
                  <tr>
                    <th className="px-6 py-4">Doctor</th>
                    <th className="px-6 py-4">Department</th>
                    <th className="px-6 py-4">Date & Time</th>
                    <th className="px-6 py-4">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {appointments.map((apt) => (
                    <tr key={apt.id} className="hover:bg-gray-50/50 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-[#f0fafa] rounded-full flex items-center justify-center text-[#37CBD1] font-bold text-xs">
                            {apt.doctor?.length > 4 ? apt.doctor.charAt(4) : (apt.doctor?.charAt(0) || 'D')}
                          </div>
                          <span className="font-semibold text-[#1A2547] text-sm">{apt.doctor || 'Unknown'}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-gray-500 text-sm">{apt.department || 'N/A'}</td>
                      <td className="px-6 py-4">
                        <div className="flex flex-col">
                          <span className="text-sm font-medium text-[#1A2547]">{apt.date}</span>
                          <span className="text-xs text-gray-400">{apt.time}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${apt.status === 'Confirmed' ? 'bg-emerald-100 text-emerald-600' : 'bg-amber-100 text-amber-600'
                          }`}>
                          {apt.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Quick Actions / Activity */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
            <h2 className="text-lg font-bold text-[#1A2547] mb-6">Health Activity</h2>
            <div className="space-y-6">
              {[
                { time: '2 hours ago', text: 'Blood pressure reading: 120/80 mmHg', icon: Activity, color: 'bg-emerald-50 text-emerald-500' },
                { time: 'Yesterday', text: 'Prescription renewed: Amoxicillin', icon: Clock, color: 'bg-blue-50 text-blue-500' },
                { time: '3 days ago', text: 'Lab results available: CBC Panel', icon: ShieldCheck, color: 'bg-purple-50 text-purple-500' },
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className={`w-10 h-10 shrink-0 rounded-xl flex items-center justify-center ${item.color}`}>
                    <item.icon size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-[#1A2547] font-medium leading-tight">{item.text}</p>
                    <span className="text-xs text-gray-400">{item.time}</span>
                  </div>
                </div>
              ))}
            </div>

            <button onClick={handlenewappointment} className="w-full mt-8 py-3 bg-[#1A2547] text-white rounded-xl font-bold hover:bg-black transition-all shadow-lg shadow-gray-200">
              New Appointment
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;