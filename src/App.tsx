import Members from "./members/members";
import Links from "./links/links";
import Description from "./description/description";

function App() {
  return (
    <div className="row">
      <Description photo="/logo.png" description="Lorem ipsum dolor sit, amet consectetur 
      adipisicing elit. Sequi, pariatur atque? Accusantium itaque minima labore. 
      Quia tenetur ab debitis necessitatibus maxime, porro repudiandae 
      voluptatum qui sapiente dignissimos culpa aliquid illum."/>

      <Links />
      
      <div className="col-md-5 p-4 border border-primary" style={{backgroundColor: "#fffffe"}}>
        <Members name="Ethan" photo="" description="Lorem ipsum dolor sit amet consectetur 
        adipisicing elit. Labore nostrum itaque ut totam minus corrupti 
        provident! In dolorem impedit rem voluptates officia!

        Illum unde quis aspernatur. Eveniet, tempora dicta? Repudiandae!"/>
        <Members name="Gary" photo="" description="Lorem ipsum dolor sit amet consectetur 
        adipisicing elit. Labore nostrum itaque ut totam minus corrupti 
        provident! In dolorem impedit rem voluptates officia!
        Illum unde quis aspernatur. Eveniet, tempora dicta? Repudiandae!"/>

        <Members name="Anderson" photo="" description="Lorem ipsum dolor sit amet consectetur 
        adipisicing elit. Labore nostrum itaque ut totam minus corrupti 
        provident! In dolorem impedit rem voluptates officia!
        Illum unde quis aspernatur. Eveniet, tempora dicta? Repudiandae!"/>
      </div>
      
    </div>
  );
}

export default App;
