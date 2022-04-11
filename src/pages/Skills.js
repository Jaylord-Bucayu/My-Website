import { DiLaravel,DiReact,DiNodejsSmall ,DiJsBadge,DiCss3,DiHtml5
,DiGithubBadge,DiSass,DiVisualstudio,
DiJqueryLogo,
DiMysql} from "react-icons/di";

import { useEffect, useState } from "react";
import Card from "../components/Card";
import SkillsTitle from "./SkillsTitle";

const Skills = () => {

   

    
   
    const Languages = [
    {
        name: "Javascript",
        icon: <DiJsBadge color={'yellow'} size={30}/>,
        level: "90%",
    
    }, 
    {    name: "HTML5",
        icon: <DiHtml5 color={'orange'} size={30}/>,
        level: "90%",
      
    }, 
    {    
        name: "CSS3",
        icon: <DiCss3 color={'#1577b4'} size={30}/>,
        level: "90%",
        
    }, 


        
    ]

    const Frameworks = [
        {
            name: "Laravel",
            icon: <DiLaravel color={'red'} size={30}/>,
            level: "90%",
            
        }, 
        {    name: "React Js",
            icon: <DiReact color={'#5cd0ee'} size={30}/>,
            level: "90%",
           
        }, 
        {    
            name: "Node Js",
            icon: <DiNodejsSmall color={'#398037'} size={30}/>,
            level: "90%",
           
        }, 
    
        {    
            name: "Saas",
            icon: <DiSass color={'#c26191'} size={30}/>,
            level: "90%",
           
        }, 
            
        ]

        const Tools = [
            {
                name: "Github",
                icon: <DiGithubBadge color={'white'} size={30}/>,
                level: "90%",
                color: ""
            }, 
            {    name: "Vs Code",
                icon: <DiVisualstudio color={'#0072cc'} size={30}/>,
                level: "90%",
                color: ""
            }, 
            {    
                name: "MySQL",
                icon: <DiMysql color={'#e68a10'} size={30}/>,
                level: "90%",
                color: ""
            }, 
        
            {    
                name: "jQuery",
                icon: <DiJqueryLogo color={'white'} size={30}/>,
                level: "90%",
                color: ""
            }, 
                
            ]

            const All = [...Languages, ...Frameworks, ...Tools]

            const [selected, setSelected] = useState('All');

            const render = (selected) => {
                return selected.map((item, index) => {
                    return (
                       
                        <Card item={item} key={index} />
                        
                    )
                })
            }


           
    
        const handleChange = (selected,e) => {

            setSelected(selected);

      
            const siblings = e.target.parentElement.children;
           

            for (let i = 0; i < siblings.length; i++) {
                if (siblings[i] !== e.target) {
                    siblings[i].classList.remove('active');
                }
            }
            e.target.classList.add('active');
           
        }

    
          
    return (
        <div className="skills">

                <SkillsTitle/>
          <div class="selections">
              <ul>
                  <li className="active" onClick={(e)=> {
                      handleChange('All',e)
                       
                }}>All</li>
                  <li onClick={(e)=> handleChange('Frameworks',e)}>Frameworks</li>
                  <li onClick={(e)=> handleChange('languages',e)}>Languages</li>
                  <li onClick={(e)=> handleChange('tools',e)}>Tools</li>
              </ul>

          </div>
            

                <div className="skills-details">
                    <div className="skills-details-items">

                        {render(`${selected}` === 'All' ? All : `${selected}` === 'Frameworks' ? Frameworks : `${selected}` === 'languages' ? Languages : `${selected}` === 'tools' ? Tools : null)}
                     
                       
              

                {/* <div className="skill-card">
                      <DiReact  size={40} color={'#5cd0ee'}/>
                <p>React Js</p>
                </div>

                <div className="skill-card">
            <DiNodejsSmall size={40} color={'#398037'}/>
                <p>Node Js</p>
                </div>

                <div className="skill-card">
            <DiHtml5 size={40} color={'orange'}/>
                <p>HTML</p>
                </div>

                <div className="skill-card">
            <DiCss3 size={40} color={'#1577b4'}/>
                <p>CSS</p>
                </div>

                <div className="skill-card">
            <DiJsBadge   size={40} color={'yellow'}/>
                <p>JavaScript</p>
                </div>


                <div className="skill-card">
            <DiGithubBadge   size={40} color={'white'}/>
                <p>Github</p>
                </div>


                <div className="skill-card">
            <DiSass   size={40} color={'#c26191'}/>
                <p>Sass</p>
                </div>

                <div className="skill-card">
            <DiVisualstudio size={40} color={'#0072cc'}/>
                <p>VS Code</p>
                </div>


                <div className="skill-card">
            <DiMysql size={40} color={'#e68a10'}/>
                <p>MySQL</p>
                </div>

                <div className="skill-card">
            <  DiJqueryLogo size={40} color={'#121a26'}/>
                <p>jQuery</p>
                </div> */}

              


                </div>

                </div>
        </div>
    )
}

export default Skills;