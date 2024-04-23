import type { FC } from "react";
import cl from "../styles/about.module.css";

const About: FC = () => {
  return (
    <div className={cl.aboutMain}>
      <p> 
        Этот проект сделан исключительно для диплома. В этом проекте присутствует 
        явный изъян - отсутствие безопасности передачи данных между вами и сервером, 
        так что не рекомендуется для реального использования.
      </p>
      <p>Создано - <a href="https://github.com/tonakihan">tonakihan</a></p>
    </div>
  );
}

export default About;