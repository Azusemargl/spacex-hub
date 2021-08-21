import React from 'react';
import LaunchesDetailInfo from './LaunchedDetailInfo';
import Breadcrumbs from '../../common/Breadcrumbs';
import LaunchesDetailGallery from './LaunchedDetailGallary';
import { LaunchType } from '../../../types/launchType';
import youtube from '../../../static/images/youtube.svg';
import wikipedia from '../../../static/images/wikipedia.svg';

const LaunchesDetail: React.FC<Props> = React.memo(({ launch }) => {
  return (
    <div className="launch_detail">
      <Breadcrumbs items={[
        { id: 1, name: 'Главная', path: '/' },
        { id: 2, name: 'Запуски', path: '/launches' },
        { id: 3, name: launch.mission_name, path: null }
      ]} />
      <h1 className="launch_detail-title">{launch.mission_name}</h1>
      <div className="launch_detail-info">
        <div className="launch_detail-image">
          <img src={launch.links?.mission_patch_small} alt={launch.mission_name} />
        </div>
        <LaunchesDetailInfo launch={launch} />
      </div>
      <div className="launch_detail-content_container">
        <div className="launch_detail-content">
          <p className="launch-label">Описание:</p>
          <p className="launch_detail-text">{launch.details}</p>
        </div>
        <div className="launch_detail-content">
          <p className="launch-label">Галерея:</p>
          <LaunchesDetailGallery launch={launch} />
        </div>
      </div>
      <div className="launch_detail-footer">
        <a className="launch-article" href={launch.links?.article_link} target="_blank" rel="noopener noreferrer">
          Читать статью...
        </a>
        <div className="launch-links">
          <a className="launch-link" href={launch.links?.video_link} target="_blank" rel="noopener noreferrer">
            <img src={youtube} alt={launch.mission_name} />
          </a>
          <a className="launch-link" href={launch.links?.wikipedia} target="_blank" rel="noopener noreferrer">
            <img src={wikipedia} alt={launch.mission_name} />
          </a>
        </div>
      </div>
    </div>
  );
});

export default LaunchesDetail;

type Props = {
  launch: LaunchType
}