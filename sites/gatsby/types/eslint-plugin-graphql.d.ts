declare module 'eslint-plugin-graphql' {
  import type { Linter } from 'eslint';

  export type RuleProperties = {
    env: 'lokka' | 'fraql' | 'relay' | 'apollo' | 'literal';
    tagName: string;
    schemaJson: Record<string, unknown>;
    schemaJsonFilepath: string;
    schemaString: string;
    projectName: string;
  };

  export interface Rules extends Linter.RulesRecord {
    'graphql/template-strings': Linter.RuleEntry<[RuleProperties]>;
    'graphql/named-operations': Linter.RuleEntry<[RuleProperties]>;
    'graphql/required-fields': Linter.RuleEntry<[RuleProperties]>;
    'graphql/capitalized-type-name': Linter.RuleEntry<[RuleProperties]>;
    'graphql/no-deprecated-fields': Linter.RuleEntry<[RuleProperties]>;
  }
}
