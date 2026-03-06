'use client';

import styles from './nav.module.css';
import Button from "../objects/button";


export default function Nav({ heights }) {

    const handleObserver = (caption) => {
        switch (caption) {
            case "About":
                window.scrollTo({
                    top: 0,
                    left: 0,
                    behavior: "smooth",
                });
                break;
            case "Skill":
                window.scrollTo({
                    top: 0 + heights[0],
                    left: 0,
                    behavior: "smooth",
                });
                break;
            case "Project":
                window.scrollTo({
                    top: 0 + heights[0] + heights[1] + 32,
                    left: 0,
                    behavior: "smooth",
                });
                break;
            case "Contact":
                window.scrollTo({
                    top: 0 + heights[0] + heights[1] + heights[2] + 64,
                    left: 0,
                    behavior: "smooth",
                });
                break;
            default:
                alert('wrong location');
                break;
        }
        return null;
    }

    return (
        <nav className={styles.container}>
            <Button onClick={handleObserver} type={"button"} caption={"About"} />
            <div className={"partition"}></div>
            <Button onClick={handleObserver} type={"button"} caption={"Skill"} />
            <div className={"partition"}></div>
            <Button onClick={handleObserver} type={"button"} caption={"Project"} />
            <div className={"partition"}></div>
            <Button onClick={handleObserver} type={"button"} caption={"Contact"} />
        </nav>
    );
}