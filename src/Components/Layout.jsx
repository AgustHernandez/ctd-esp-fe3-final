import { useGlobalContext } from "./utils/global.context";

const Layout = ({children}) => {
const { state } = useGlobalContext()

    return (
        <div style={{background: state.theme.background, color:state.theme.font}}>
            {children}
        </div>
    )
}

export default Layout