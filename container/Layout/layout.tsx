import Header from "../Header/header"
const Layout: React.FC<any> = ({ children }) => {
  return (
    <div className={`layout`}>
      <Header />
      <div className="container mx-auto">
        <div className="main-container">
          {children}
        </div>
      </div>
    </div>
  )
}

export default Layout
