import * as dirTree from 'directory-tree';
import * as disk from 'diskusage';
import { consoleLogger, ILogger } from '../utils/logger';

type IDiskInfoError = Error | string;

interface IDiskInfo {
  total: number;
  available: number;
  free: number;
}

interface IDirTreeItem {
  path: string;
}

export const showDirectoryStatus = async (
  directory: string = '/tmp',
  logger: ILogger = consoleLogger,
) =>
  new Promise(resolve => {
    disk.check(directory, (err: IDiskInfoError, info: IDiskInfo) => {
      if (err) {
        logger.warn(`Cannot get disk space: ${err}`);
      } else {
        logger.debug(
          `Disk[${directory}] Total=${info.total}, Available=${
            info.available
          }, Free=${info.free}`,
        );
        logger.debug(`Start to list a files in ${directory}`);
        dirTree(directory, null, (item: IDirTreeItem) => {
          logger.debug(item.path);
        });
        resolve();
      }
    });
  });
