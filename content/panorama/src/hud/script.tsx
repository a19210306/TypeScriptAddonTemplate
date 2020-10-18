import React from 'react';
import { render } from 'react-panorama';

function HeroRow({ heroName }: { heroName: string }) {
  return (
    <Panel style={{ flowChildren: 'right' }}>
      <DOTAHeroImage heroimagestyle="icon" heroname={heroName} />
      <Label style={{ marginLeft: '5px' }} localizedText={heroName} />
    </Panel>
  );
}

function HeroList() {
  return (
    <Panel style={{ flowChildren: 'down' }}>
      <HeroRow heroName="npc_dota_hero_abaddon" />
      <HeroRow heroName="npc_dota_hero_abyssal_underlord" />
      <HeroRow heroName="npc_dota_hero_alchemist" />
    </Panel>
  );
}

render(<HeroList />, $.GetContextPanel());