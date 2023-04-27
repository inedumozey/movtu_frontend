import { useState, createContext, useEffect } from 'react';
import Layout from '../layouts';
import staticDataClass from '../utils/data/staticDataClass';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import ReceiptIcon from '@mui/icons-material/Receipt';
import WalletIcon from '@mui/icons-material/Wallet';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import CallIcon from '@mui/icons-material/Call';
import apiClass from '../utils/data/api';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import PinIcon from '@mui/icons-material/Pin';
import SettingsIcon from '@mui/icons-material/Settings';
import PeopleIcon from '@mui/icons-material/People';
import Cookies from 'js-cookie';

const api = new apiClass()
const staticData = new staticDataClass()


const ContextData = createContext()

function ContextApi({ children }) {
    const [showsidedrawal, setShowsidedrawal] = useState(false)
    const [isAdmin, setIsAdmin] = useState(false)
    const [hasAccess, setHasAccess] = useState(false)

    useEffect(() => {
        Cookies.get('xxxxx') ? setIsAdmin(true) : setIsAdmin(false)
        Cookies.get('accesstoken') ? setHasAccess(true) : setHasAccess(false)
    }, [])

    // users
    const [fetchingUsers, setFetchingUsers] = useState(false)
    const [fetchingUsersSuccess, setFetchingUsersSuccess] = useState(false)
    const [users, setUsers] = useState([])

    // user
    const [fetchingUser, setFetchingUser] = useState(false)
    const [fetchingUserSuccess, setFetchingUserSuccess] = useState(false)
    const [user, setUser] = useState("")

    //config
    const [fetchingConfig, setFetchingConfig] = useState(false)
    const [fetchingConfigSuccess, setFetchingConfigSuccess] = useState(false)
    const [configData, setConfigData] = useState("")
    const [updatingEmailPhone, setUpdatingEmailPhone] = useState(false)

    // profile
    const [fetchingProfile, setFetchingProfile] = useState(false);
    const [editProfileLoading, setEditProfileLoading] = useState(false);
    const [fetchingProfileSuccess, setFetchingProfileSuccess] = useState(false);
    const [profile, setProfile] = useState('');

    // console.log(profile)

    useEffect(() => {
        if (!hasAccess) {
            api.refreshToken();

            setTimeout(() => {
                api.fetchProfile(setFetchingProfile, setFetchingProfileSuccess, setProfile, true)
            }, 1000)
        }
        else {
            api.fetchProfile(setFetchingProfile, setFetchingProfileSuccess, setProfile, true)
        }

    }, [hasAccess])



    const links = {
        account: {
            title: 'Account',
            link: [
                { name: 'Dashboard', url: '/dashboard/', icon: AccountBalanceIcon },
                { name: 'Profile', url: '/dashboard/profile', icon: AccountCircleIcon },
                { name: 'Wallet', url: '/dashboard/wallet', icon: WalletIcon }
            ]
        },

        collections: {
            title: 'Collections',
            link: [
                { name: 'My Transactions', url: '/collections/transactions', icon: ReceiptIcon },
                { name: 'Buy Data Bundle', url: '/collections/data', icon: RssFeedIcon },
                { name: 'Buy Airtime VTU', url: '/collections/airtime', icon: CallIcon },
                { name: 'Airtime To Cash', url: '/collections/airtime-cash', icon: MonetizationOnIcon },
                { name: 'Print Recharge Card', url: '/collections/recharge-card', icon: PinIcon }
            ]
        },

        admin: {
            title: 'Admin',
            link: [
                { name: 'Manage Users', url: '/admin/manage-users', icon: PeopleIcon },
                { name: 'Configuraions', url: '/admin/configurations', icon: SettingsIcon }
            ]
        }
    }

    const state = {
        ...staticData,
        links,
        avatar: "https://api.multiavatar.com/drmp.svg",
        sideDrawal: {
            showsidedrawal,
            setShowsidedrawal
        },
        isAdmin,
        hasAccess,
        user: {
            fetchingProfile,
            setFetchingProfile,
            fetchingProfileSuccess,
            setFetchingProfileSuccess,
            profile,
            setProfile,
            editProfileLoading,
            setEditProfileLoading
        },
        admin: {
            fetchingUsers,
            setFetchingUsers,
            fetchingUsersSuccess,
            setFetchingUsersSuccess,
            users,
            setUsers,

            fetchingUser,
            setFetchingUser,
            fetchingUserSuccess,
            setFetchingUserSuccess,
            user,
            setUser,
        },
        config: {
            fetchingConfig,
            setFetchingConfig,
            fetchingConfigSuccess,
            setFetchingConfigSuccess,
            configData,
            setConfigData,
            updatingEmailPhone,
            setUpdatingEmailPhone,
        },
    }

    return (
        <ContextData.Provider value={state}>
            <Layout>
                {children}
            </Layout>
        </ContextData.Provider>
    )
}

export { ContextApi, ContextData }