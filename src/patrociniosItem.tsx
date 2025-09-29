import { Patro, patrocinios } from "./data/patrocinios";

export const patrociniosItem = ({index, url}: Patro) => {
    return(
        <div>
            {patrocinios.map(index, url) => (
                <div></div>
            )}
        </div>
    );
}