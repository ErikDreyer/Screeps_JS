/**
 * Extend the interface of the Creep
 * @author Erik Dreyer
 */
interface Creep {
  /**
   * Run the respective role of the Creep
   *
   */
  runRole(): void;
}

/**
 * Types of roles that a creep can have
 * @author Erik Dreyer
 */
type CreepRole =
  HARVESTER |
  CONSTRUCTOR |
  UPGRADER |
  REPAIRER |
  MINER |
  TRANSPORTER;

type HARVESTER = "HARVESTER";
type CONSTRUCTOR = "CONSTRUCTOR"
type UPGRADER = "UPGRADER";
type REPAIRER = "REPAIRER";
type MINER = "MINER";
type TRANSPORTER = "TRANSPORTER";
