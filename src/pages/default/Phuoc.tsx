import { ElementMenu } from "@/components/assets/ElementMenu"
import { TabItem } from "@/components/assets/Tab-item"
import { TitleSection } from "@/components/assets/TitleSection"

export const Phuoc= ()=>{
    return(
        <div>
       <div className="flex">    <TabItem status="disabled">  new posts </TabItem>
            <TabItem status="enabled">  new posts </TabItem></div> 

            <div className="flex">   
            <TitleSection status="Default">  new posts </TitleSection>
            <TitleSection status="dot">  new posts </TitleSection>
            <TitleSection status="simple">  new posts </TitleSection>
            </div>
            <div className="flex">   
            <ElementMenu status="MegaMenItem">  items </ElementMenu>
            <ElementMenu status="MenItemSub">  child item </ElementMenu>
            <ElementMenu status="MenItemIcon">  child item </ElementMenu>
            <ElementMenu status="FooterMenItem">  item </ElementMenu>
            </div>
        </div>
    )
}