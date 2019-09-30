/* eslint-disable react/button-has-type */
import React from 'react';
import Slider from 'rc-slider';

import {
  Container,
  Current,
  Progress,
  Controls,
  Time,
  ProgressSlider,
  Volume,
} from './styles';

import VolumeIcon from '../../assets/images/volume.svg';
import ShuffleIcon from '../../assets/images/shuffle.svg';
import BackwardIcon from '../../assets/images/backward.svg';
import PlayIcon from '../../assets/images/play.svg';
import PauseIcon from '../../assets/images/pause.svg';
import ForwardIcon from '../../assets/images/forward.svg';
import RepeatIcon from '../../assets/images/repeat.svg';

export default function Player() {
  return (
    <Container>
      <Current>
        <img
          src="data:image/png;base64,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"
          alt="Cover"
        />

        <div>
          <span>Titulo da musica</span>
          <small>Foo fgogo</small>
        </div>
      </Current>
      <Progress>
        <Controls>
          <button>
            <img src={ShuffleIcon} alt="" />
          </button>

          <button>
            <img src={BackwardIcon} alt="" />
          </button>

          <button>
            <img src={PlayIcon} alt="" />
          </button>

          <button>
            <img src={ForwardIcon} alt="" />
          </button>

          <button>
            <img src={RepeatIcon} alt="" />
          </button>
        </Controls>

        <Time>
          <span>0:07</span>
          <ProgressSlider>
            <Slider
              railStyle={{ background: '#404040', borderRadius: 10 }}
              trackStyle={{ background: '#1ed760' }}
              handleStyle={{ border: 0, cursor: 'default' }}
            />
          </ProgressSlider>
          <span>3:23</span>
        </Time>
      </Progress>

      <Volume>
        <img src={VolumeIcon} alt="" />
        <Slider
          railStyle={{ background: '#404040', borderRadius: 10 }}
          trackStyle={{ background: '#fff' }}
          handleStyle={{ border: 0, cursor: 'default' }}
          value={100}
        />
      </Volume>
    </Container>
  );
}
