import Table from "./people/Table";
import CatherineSvg from "./people/CatherineSvg";
import ClaireSvg from "./people/ClaireSvg";
import DavidSvg from "./people/DavidSvg";
import RoxanneSvg from "./people/RoxanneSvg";
import JeanMarcSvg from "./people/JeanMarcSvg";
import JeanMichelSvg from "./people/JeanMichelSvg";
import Plante from "./people/Plante";
import Plat from "./people/Plat";
import Verre1 from "./people/Verre1";
import Verre2 from "./people/Verre2";
import Verre3 from "./people/Verre3";
import Verre4 from "./people/Verre4";

const TableWithPeople = ({
                             hoveredPerson,
                             setHoveredPerson,
                             handleHoveredPerson,
                             handlePickedPerson,
                             zoom,
                             pickedPerson,
                             cssZoom
                         }) => (
    <>
        <JeanMichelSvg
            setHoveredPerson={setHoveredPerson}
            handleHoveredPerson={handleHoveredPerson}
            handlePickedPerson={handlePickedPerson}
            zoom={zoom}
            pickedPerson={pickedPerson}
            hoveredPerson={hoveredPerson}
        />
        <RoxanneSvg
            setHoveredPerson={setHoveredPerson}
            handleHoveredPerson={handleHoveredPerson}
            handlePickedPerson={handlePickedPerson}
            zoom={zoom}
            pickedPerson={pickedPerson}
            hoveredPerson={hoveredPerson}
        />
        <JeanMarcSvg
            setHoveredPerson={setHoveredPerson}
            handleHoveredPerson={handleHoveredPerson}
            zoom={zoom}
            hoveredPerson={hoveredPerson}
        />
        <DavidSvg
            setHoveredPerson={setHoveredPerson}
            handleHoveredPerson={handleHoveredPerson}
            handlePickedPerson={handlePickedPerson}
            zoom={zoom}
            pickedPerson={pickedPerson}
            hoveredPerson={hoveredPerson}
        />
        <ClaireSvg
            setHoveredPerson={setHoveredPerson}
            handleHoveredPerson={handleHoveredPerson}
            handlePickedPerson={handlePickedPerson}
            zoom={zoom}
            pickedPerson={pickedPerson}
            hoveredPerson={hoveredPerson}
        />
        <CatherineSvg
            setHoveredPerson={setHoveredPerson}
            handleHoveredPerson={handleHoveredPerson}
            handlePickedPerson={handlePickedPerson}
            zoom={zoom}
            pickedPerson={pickedPerson}
            hoveredPerson={hoveredPerson}
        />
        <Table
            zoom={zoom}
        />
        <Plante
            zoom={zoom}
        />
        <Plat
            zoom={zoom}
        />
        <Verre1
            zoom={zoom}
        />
        <Verre2
            zoom={zoom}
        />
        <Verre3
            zoom={zoom}
        />
        <Verre4
            zoom={zoom}
        />
        <style>{`
            .table-container {
                  scale: ${cssZoom}; /* all browsers */
                  -moz-transform: scale(${cssZoom});  /* Firefox */
            }
        
            #roxanne {
            position: absolute;
            top: -${75 * zoom}px;
            left: ${224 * zoom}px;
        }

            #jeanMichel {
            position: absolute;
            top: -${85 * zoom}px;
            right: -${80 * zoom}px;
            z-index: 30;
        }

            #jeanMarc {
            position: absolute;
            top: -${93 * zoom}px;
            left: -${114 * zoom}px;
        }

            #claire {
            position: absolute;
            top: -${86 * zoom}px;
            right: ${280 * zoom}px;
        }

            #david {
            position: absolute;
            top: -${55 * zoom}px;
            right: ${130 * zoom}px;
            z-index: 20;
        }

            #catherine {
            position: absolute;
            top: -${77 * zoom}px;
            left: ${80 * zoom}px;
        }

            #table {
            position: relative;
            z-index: 30;
            pointer-events: none;
        }

            #plante {
            position: absolute;
            top: -${6 * zoom}px;
            right: ${350 * zoom}px;
        }

            #plat {
            position: absolute;
            top: ${35 * zoom}px;
            right: ${190 * zoom}px;
            z-index: 30;
        }

            #verre1 {
            position: absolute;
            top: ${20 * zoom}px;
            right: ${100 * zoom}px;
        }

            #verre2 {
            position: absolute;
            top: ${20 * zoom}px;
            right: ${140 * zoom}px;
        }

            #verre3 {
            position: absolute;
            top: ${20 * zoom}px;
            right: ${280 * zoom}px;
        }

            #verre4 {
            position: absolute;
            top: ${20 * zoom}px;
            right: ${380 * zoom}px;
        }
        `}</style>
    </>
)

export default TableWithPeople