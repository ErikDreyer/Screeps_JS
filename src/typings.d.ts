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

/**
 * Type of role that a creep may have
 *
 */
type HARVESTER = "HARVESTER";

/**
 * Type of role that a creep may have
 *
 */
type CONSTRUCTOR = "CONSTRUCTOR"

/**
 * Type of role that a creep may have
 *
 */
type UPGRADER = "UPGRADER";

/**
 * Type of role that a creep may have
 *
 */
type REPAIRER = "REPAIRER";

/**
 * Type of role that a creep may have
 *
 */
type MINER = "MINER";

/**
 * Type of role that a creep may have
 *
 */
type TRANSPORTER = "TRANSPORTER";
